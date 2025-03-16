import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ResearchTopicsService } from "./research-topics.service";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { RegisterFacultyResearchTopicDto } from "./dto/register-faculty-research-topic.dto";
import { Roles } from "src/common/decorator/roles.decorator";
import { Role } from "src/common/enums/role.enum";
import { ResearchTopic } from "./entities/research-topic.entity";

@Controller('research-topics')
export class ResearchTopicsController {
  constructor(
    private researchTopicsService: ResearchTopicsService
  ) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  async registerFacultyResourceTopic(@Body() dto: RegisterFacultyResearchTopicDto) {
    return this.researchTopicsService.registerFacultyResourceTopic(dto)
  }

  @Post('approved/:id')
  async appreovedFacultyResourceTopic(@Param('id') id: number) {
    return {
      data: this.researchTopicsService.approvedFacultyResourseTopic(id)
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  async getAll() {
    return {
      data: await this.researchTopicsService.findAll({
        relations: [
          'user',
          'department',
          'researchField',
          'lecturer',
          'researchGroup',
          'outlineFile',
          'acceptanceDocument',
          'registrationPeriod',
          'researchMembers',
        ]
      })
    };
  }


  @Patch()
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  async update(dto: ResearchTopic) {
    const preloaded = await this.researchTopicsService.preload(dto)
    return {
      data: await this.researchTopicsService.save(preloaded)
    }
  }
}
