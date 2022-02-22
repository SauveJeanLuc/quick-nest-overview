import { Body, Controller, Get, HttpCode, Param, Post, Redirect } from "@nestjs/common";
import { CreateTokenDto } from "./create-token.dto";
import { Token } from "./token.interface";
import { TokenService } from "./token.service";

@Controller('tokens')
export class TokenController {
    constructor(private tokenService: TokenService){}

    @Get()
    async findAll(): Promise<Token[]> {
        return this.tokenService.findAll();
    }

    @Get('youtube')
    @Redirect('https://www.youtube.com', 200)
    testYoutubeToken(): object {
        return { url: 'https://www.youtube.com'};
    }

    @Post()
    @HttpCode(204)
    create(@Body() dto: CreateTokenDto): string {
        return `Token with value ${dto.value} created successfully`;
    }

    @Get(':id')
    findOne(@Param() params): string {
        return `You have entered text: ${params.id}`;
    }

    @Get(':id')
    findOneParam(@Param('id') id:string): string {
        return `You have entered text: ${id}`;
    }
}