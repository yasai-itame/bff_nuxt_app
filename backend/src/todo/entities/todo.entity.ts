import { ApiProperty } from "@nestjs/swagger";

export class Todo {
  @ApiProperty({ example: 1, description: "Todo Id" })
  id: number

  @ApiProperty({ example: "タイトル", description: "Todo タイトル" })
  title: string

  @ApiProperty({ example: "コンテンツ", description: "Todo コンテンツ" })
  contents: string
}