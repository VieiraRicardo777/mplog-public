// contato.component.ts

import { Component } from '@angular/core';
import { ContatoService } from '../../contato.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
  sucessoNoEnvio: boolean = false;  // Adicione esta linha

  constructor(
    private contatoService: ContatoService,
    private dialogRef: MatDialogRef<ContatoComponent>  // Adicione esta linha
  ) {}

  onSubmit(form: any) {
    this.contatoService.enviarEmail(form.value).subscribe(
      () => {
        this.sucessoNoEnvio = true;
        // Limpar o formulário
        form.reset();
        
        // Fechar o diálogo após um breve atraso (opcional)
        setTimeout(() => {
          this.dialogRef.close();
        }, 2000); // Ajuste o valor conforme necessário
      },
      (error) => {
        console.error('Erro ao enviar o formulário', error);
        // Faça o que for necessário em caso de erro
      }
    );
  }
}