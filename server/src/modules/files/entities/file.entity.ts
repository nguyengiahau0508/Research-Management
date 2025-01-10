
import { FileMimeType, FileProvider } from "src/common/enums/file.enum";
import { BaseEntity } from "src/common/shared/entities/base.entity";
import { ResearchTopic } from "src/modules/research-topics/entities/research-topic.entity";
import { Column, Entity, OneToOne } from "typeorm";

@Entity()
export class File extends BaseEntity {
  @Column()
  url: string;

  @Column()
  providerId: string;

  @Column({
    type: 'enum',
    enum: FileMimeType,
    default: FileMimeType.OTHER,
  })
  type: FileMimeType;

  @Column({
    type: 'enum',
    enum: FileProvider,
    default: FileProvider.LOCAL,
  })
  provider: FileProvider;

  @OneToOne(() => ResearchTopic, (researchTopic) => researchTopic.outlineFile)
  outlineResearchTopic?: ResearchTopic;

  @OneToOne(() => ResearchTopic, (researchTopic) => researchTopic.acceptanceDocument)
  acceptanceResearchTopic?: ResearchTopic;
}

