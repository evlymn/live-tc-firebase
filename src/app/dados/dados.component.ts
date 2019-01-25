import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss']
})
export class DadosComponent implements OnInit {
  mensagens: any;
  nome = '';
  mensagem = '';

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.mensagens = this.db.list('mensagens').valueChanges();
  }

  gravar() {
    this.db.database
      .ref('mensagens')
      .push({ nome: this.nome, mensagem: this.mensagem })
      .then(f => {
        console.log(f.key);
      });
  }
}
