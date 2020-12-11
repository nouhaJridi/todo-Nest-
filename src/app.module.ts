import { SkillsModule } from './divers/skills.module';
import { TodoModule } from './todo/todo.module';
import { TestModule } from './test.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TestModule , TodoModule , SkillsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
