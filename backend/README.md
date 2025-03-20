## ローカル環境

ローカル環境ではmysql

## 本番環境

本番環境ではpostgresql

## 補足情報

・ローカル環境でpostgresqlにして確認する場合、現状ではmysqlで構築されているため、prismaディレクトリ内のmigrationディレクトリごとを削除すること。削除後、MAMPなどのローカルサーバーを起動させている状態でnpm run migrate:devを実行すること。

▼migrate後にgenerateが必要な場合<br/>
prisma.schemaで新しいモデルやフィールドを追加・変更した場合、Prisma Clientの型も変わるため prisma generateを実行すること。
<br/>
<br/>
migrate devは内部でgenerateも実行してくれるが、<br/>
環境によっては反映されないことがあり、<br/>
手動で prisma generate を実行するのが安全。

```bash
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
  age   Int     // ← age フィールドを追加
}
```

```bash
prisma migrate dev --name "add_age_to_user"
prisma generate  # ← Prisma Client を更新
```

▼migrate後にgenerateが不要な場合<br/>
例えば @default() の値を変更するなど、<br/>
データベースの動作には影響するが、Prisma Clientの型には影響しない変更。

```bash
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
  age   Int     @default(18) // ← デフォルト値を変更
}
```

```bash
prisma migrate dev --name "change_default_age"
```

Prisma Clientの型自体は変わらないのでprisma generateは不要となる。

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
