"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { SelectContent } from "@radix-ui/react-select";

export default function CheckoutPage() {
    const [paymentMethod, setPaymentMethod] = useState("credit");
    const [shippingCost, setShippingCost] = useState(12.0);
    const subtotal = 1096.0;
    const discount = 10.0;
    const taxRate = 0.18;
    const total = subtotal + shippingCost - discount + subtotal * taxRate;

    return (
  <>
            
               
                < div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Thông tin cá nhân */}
                        <Card>
                            <CardContent>
                                <h2 className="text-lg font-semibold mb-4">Thông tin cá nhân của bạn</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <Input placeholder="Họ" />
                                    <Input placeholder="Tên" />
                                    <Input placeholder="Số điện thoại" />
                                    <Input placeholder="Địa chỉ email" />
                                    <Input className="col-span-2" placeholder="Địa chỉ nhận hàng" />
                                    <Input placeholder="Thành phố" />
                                    <Input placeholder="Quận/Huyện" />
                                    <Input placeholder="Phường/Xã" />
                                    <Input placeholder="Mã giảm giá" />
                                    <Select>
                                    <SelectContent>
                                        <SelectItem value="us">United States</SelectItem>
                                        <SelectItem value="vn">Vietnam</SelectItem>
                                        <SelectItem value="jp">Japan</SelectItem>
                                    </SelectContent>
                                    </Select>
                                </div>
                                <Button className="w-full mt-4">Lưu</Button>
                            </CardContent>
                        </Card>

                        {/* Thanh toán */}
                        <Card>
                            <CardContent>
                                <h2 className="text-lg font-semibold mb-4">Pricing</h2>
                                <div className="flex justify-between"><span>Tổng giá trị đơn hàng:</span> <span>${subtotal.toFixed(2)}</span></div>
                                <div className="flex justify-between text-red-500"><span>Phí vận chuyển:</span> <span>${shippingCost.toFixed(2)}</span></div>
                                <div className="flex justify-between text-green-500"><span>Giảm giá:</span> <span>-${discount.toFixed(2)}</span></div>
                                <div className="flex justify-between"><span>Thuế (18%):</span> <span>${(subtotal * taxRate).toFixed(2)}</span></div>
                                <div className="flex justify-between font-bold border-t mt-2 pt-2"><span>Tổng thanh toán:</span> <span>${total.toFixed(2)}</span></div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Phương thức thanh toán */}
                    <Card className="mt-6">
                        <CardContent>
                            <h2 className="text-lg font-semibold mb-4">Phương thức thanh toán</h2>
                            <RadioGroup defaultValue={paymentMethod} onValueChange={setPaymentMethod}>
                                <Label className="flex items-center gap-2">
                                    <RadioGroupItem value="credit" /> Thẻ tín dụng/Ghi nợ
                                </Label>
                                <Label className="flex items-center gap-2">
                                    <RadioGroupItem value="banking" /> Chuyển khoản ngân hàng
                                </Label>
                            </RadioGroup>
                            {paymentMethod === "credit" ? (
                                <>
                                    <Input placeholder="Số thẻ" className="mt-2" />
                                    <Input placeholder="Ngày hết hạn" type="date" className="mt-2" />
                                    <Input placeholder="CVV" className="mt-2" />
                                </>
                            ) : (
                                <>
                                    <Input placeholder="Tên chủ tài khoản" className="mt-2" />
                                    <Input placeholder="Số tài khoản" className="mt-2" />
                                    <div className="grid grid-cols-2 gap-2">
                                        <Input placeholder="Ngân hàng" />
                                        <Input placeholder="Mã IFC" />
                                    </div>
                                </>
                            )}
                            <Button className="w-full mt-4">Thanh toán ngay</Button>
                        </CardContent>
                    </Card>
                </div>
                
            </>
            );
}
