model permission {
  id           Int      @id @default(autoincrement())
  item_type    String
  item_type_id Int
  access_level String
  user_id      Int
  created_at   DateTime @default(now())
}
