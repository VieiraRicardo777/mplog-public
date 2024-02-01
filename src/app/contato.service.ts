// contato.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }


  enviarEmail(dados: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/enviar-email`, dados, { responseType: 'text' })
      .pipe(
        tap(() => {
          this.snackBar.open('E-mail enviado com sucesso!', 'Fechar', {
            duration: 5000, // Duração em milissegundos (opcional)
            panelClass: ['snackbar-success'] // Adicione uma classe de estilo personalizado (opcional)
          });
        })
      );
  }
}