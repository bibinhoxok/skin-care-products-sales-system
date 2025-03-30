import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import ProductModel from '@/models/product';
import { zProductSchemaUdate } from '@/schemas/productSchema';

// Kết nối database khi khởi động
connectDB();

// GET: Lấy chi tiết sản phẩm
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const product = await ProductModel.findById(params.id).populate('category');
    
    if (!product) {
      return NextResponse.json(
        { success: false, message: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: product.toClient()
    });

  } catch (error) {
    console.error('GET Product Detail Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}

// PUT: Cập nhật sản phẩm
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const parsedData = await zProductSchemaUdate.parseAsync(body);
    
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      params.id,
      parsedData,
      { new: true }
    ).populate('category');

    if (!updatedProduct) {
      return NextResponse.json(
        { success: false, message: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: updatedProduct.toClient()
    });

  } catch (error) {
    console.error('PUT Product Error:', error);
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : 'Validation failed' },
      { status: 400 }
    );
  }
}

// DELETE: Xóa sản phẩm (soft delete)
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const deletedProduct = await ProductModel.findByIdAndUpdate(
      params.id,
      { is_active: false },
      { new: true }
    );

    if (!deletedProduct) {
      return NextResponse.json(
        { success: false, message: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: deletedProduct.toClient()
    });

  } catch (error) {
    console.error('DELETE Product Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to delete product' },
      { status: 500 }
    );
  }
}