// src/qr-code.controller.ts
// import { Controller, Get, Query } from '@nestjs/common';
// import { QrCodeService } from './qr_code.service';

// @Controller('qr-code')
// export class QrCodeController {
//   constructor(private readonly qrCodeService: QrCodeService) {}

//   @Get()
//   async generateQrCode(@Query('data') data: string) {
//     const qrCodeDataURL = await this.qrCodeService.generateQrCode(data);
//     return `<img src=" ${qrCodeDataURL} " alt="QR Code" />`;
//   }
// }
