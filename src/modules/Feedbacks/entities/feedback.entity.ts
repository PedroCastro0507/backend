import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Provider } from '../../providers/entities/provider.entity';
import { User } from '../../users/entities/user.entity';
import { Service } from '../../services/entities/service.entity';

@Entity('feedbacks')
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Service, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'service_id' })
  service: Service;

  @ManyToOne(() => Provider, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'provider_id' })
  provider: Provider;

  @ManyToOne(() => User, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ type: 'int' })
  rating: number;

  @Column({ type: 'text', nullable: true })
  comment: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
