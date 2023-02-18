import { UpdateDateColumn, CreateDateColumn } from "typeorm";

export abstract class BaseEntity {
  @CreateDateColumn({
    name: "insert_ts",
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
  })
  insertTs: Date;

  @UpdateDateColumn({
    name: "modification_ts",
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
  })
  modificationTs: Date;
}
