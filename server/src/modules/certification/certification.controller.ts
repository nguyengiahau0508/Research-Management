import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CertificationService } from './certification.service';
import { CreateCertificationDto } from './dto/create-certification.dto';
import { UpdateCertificationDto } from './dto/update-certification.dto';

@Controller('certification')
export class CertificationController {
  constructor(private readonly certificationService: CertificationService) { }

  @Post()
  async create(@Body() createCertificationDto: CreateCertificationDto) {
    return this.certificationService.createCertification(createCertificationDto);
  }

  @Get()
  findAll() {
    return this.certificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.certificationService.findOneById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCertificationDto: UpdateCertificationDto) {
    return this.certificationService.update(+id, updateCertificationDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.certificationService.remove(+id);
  // }
}
