import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from './users';

@Entity('goals')
class Goal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  totalvalue: number;

  @Column()
  sparedvalue: number;

  @Column()
  userid: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userid' })
  owner: User;

  @Column()
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Goal;
