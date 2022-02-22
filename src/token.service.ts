import { Injectable } from "@nestjs/common";
import { Token } from "./token.interface";

@Injectable()
export class TokenService {
    private readonly tokens: Token[] = [];

    create(token: Token) {
        this.tokens.push(token);
    }

    findAll(): Token[] {
        return this.tokens;
    }
}