import { Component, OnInit } from '@angular/core';
import { BackgroundImages } from 'src/app/interfaces/background-images.interfaces';
import { ImagesServiceService } from "../../services/images-service/images-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  coverPage: HTMLElement;
  pages: Array<string> = [ 'cover-page', 'about', 'activities',  'counseling', 'prayer', 'articles'];
  backgroundImages: BackgroundImages = {
    coverPage : "",
    about : "",
    activities: "",
    counseling: "",
    prayer: "",
    articles: ""
  };

  constructor( private _imageService: ImagesServiceService ) { }

  ngOnInit(): void {
    this.pages
    this.getBackgroundImages()
    .then(res=>{
      this.backgroundImages.coverPage = res[0].main[0];
      this.backgroundImages.about = res[0].nosotros[0];
      this.backgroundImages.activities = res[0].actividades[0];
      this.backgroundImages.counseling = res[0].consejos[0];
      this.backgroundImages.prayer = res[0].oracion[0];
      this.backgroundImages.articles = res[0].articulos[0];
      this.setBackground(this.backgroundImages.coverPage, this.pages);
      console.log(res[0].main[0]);
    })


  }

  getBackgroundImages() {
    return new Promise((res, rej)=>{
      this._imageService.getImagesPortada()
      .subscribe(item=>{
        let dataRes = new Array;
        item.forEach(element => {
          dataRes.push(element.payload.doc.data());
          res(dataRes);
        })
      })

    })
  }

  setBackground(background: string, select: Array<string>) {
    this.coverPage = document.querySelector(`#${select[0]}`);
    this.coverPage.style.background = `#f3f3 url('${background}') no-repeat center`;
    this.coverPage.style.backgroundSize = "cover";
    this.coverPage.style.opacity = "0.5";
  }

}
