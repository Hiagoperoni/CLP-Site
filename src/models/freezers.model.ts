import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class FreezerModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  clientId: number;

  @Column('int')
  freezerId: number;

  @CreateDateColumn()
  diaEHora: string;

  @Column('int')
  tempDefinida: number;

  @Column('int')
  tempAtual: number;

  @Column('int')
  margemTemp: number;

  @Column('text')
  statusPorta: string;

  @Column('int')
  tempDefPorta: number;

  @Column('int')
  tempPortaAberta: number;

  @Column('text')
  gatilhoDoErro: string;

  @Column('text')
  erro: string;
}
