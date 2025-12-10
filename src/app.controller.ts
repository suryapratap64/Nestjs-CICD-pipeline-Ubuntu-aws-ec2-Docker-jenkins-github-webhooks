import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHero(@Res() res: Response): void {
    const htmlContent = this.appService.getHeroPage();
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(htmlContent);
  }

  @Get('api/status')
  getStatus(): { status: string; message: string; author: string } {
    return {
      status: 'success',
      message: 'Full CI/CD Pipeline Deployment Successful',
      author: 'Surya Pratap from Prayagraj',
    };
  }

  @Get('api/pipeline')
  getPipelineInfo(): object {
    return this.appService.getPipelineInfo();
  }
}
