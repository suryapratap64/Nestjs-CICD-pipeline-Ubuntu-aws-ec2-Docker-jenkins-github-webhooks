import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return success status', () => {
      expect(appController.getStatus()).toEqual({
        status: 'success',
        message: 'Full CI/CD Pipeline Deployment Successful',
        author: 'Surya Pratap from Prayagraj',
      });
    });
  });

  describe('api/pipeline', () => {
    it('should return pipeline information', () => {
      const result = appController.getPipelineInfo();
      expect(result).toBeDefined();
      expect(result).toHaveProperty('project');
      expect(result).toHaveProperty('infrastructure');
      expect(result).toHaveProperty('pipeline');
    });
  });
});
