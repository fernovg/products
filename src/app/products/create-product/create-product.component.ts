import { Component } from '@angular/core';
import { LigasService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

    product: any = {}; 

    mostrarProduct : boolean = false;

    constructor( private ligaService: LigasService,) {}
  

    onSubmit() {
        // Envía la solicitud POST para crear el producto
        this.ligaService.agregarLiga(this.product).subscribe(
          (response) => {
            console.log('Producto creado:', response);
            this.mostrarSweetAlert('success', '¡Producto creado!', 'El producto se ha creado exitosamente.');
            // Puedes redirigir a otra página o realizar otras acciones después de crear el producto.
          },
          (error) => {
            console.error('Error al crear el producto:', error);
            this.mostrarSweetAlert('error', 'Error', 'Hubo un error al crear el producto. Por favor, inténtalo de nuevo.');
          }
        );
      }
      mostrarSweetAlert(icon: any, title: string, text: string) {
        Swal.fire({
          icon: icon,
          title: title,
          text: text,
        });
      }
      
  
      agregarProductos(){
          this.mostrarProduct = true;
          
      }
}
