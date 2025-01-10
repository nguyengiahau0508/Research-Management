import { Controller, Get, UseGuards } from "@nestjs/common";

@Controller()
export class AppController {

  @Get()
  async test() {
    return {
      name: "Nguyen Gia Hau"
    }
  }
}


