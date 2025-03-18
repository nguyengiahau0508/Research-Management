import { Controller, Get, Post, Body, Patch, Param} from '@nestjs/common';
import { ParacticalApplicationsService } from './paractical-applications.service';
import { CreateParacticalApplicationDto } from './dto/create-paractical-application.dto';
import { UpdateParacticalApplicationDto } from './dto/update-paractical-application.dto';

@Controller('paractical-applications')
export class ParacticalApplicationsController {
  constructor(private readonly paracticalApplicationsService: ParacticalApplicationsService) { }

  @Post()
async  create(@Body() createParacticalApplicationDto: CreateParacticalApplicationDto) {
    const created = this.paracticalApplicationsService.create(createParacticalApplicationDto);
    return await this.paracticalApplicationsService.save(created);
  }

  @Get()
  findAll() {
    return this.paracticalApplicationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paracticalApplicationsService.findOneById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParacticalApplicationDto: UpdateParacticalApplicationDto) {
    return this.paracticalApplicationsService.update(+id, updateParacticalApplicationDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.paracticalApplicationsService.remove(+id);
  // }
}
