import { Component, OnInit, Input } from '@angular/core';
import { BackgroundImages } from 'src/app/models/background-images.interfaces';
import { ImagesServiceService } from "../../../services/images-service/images-service.service";
import { AuthServiceService } from '../../../services/auth-service/auth-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() stateAuth: boolean;

  coverPage: HTMLElement;
  pages: Array<string> = ['cover-page', 'about', 'activities', 'counseling', 'prayer', 'articles'];
  backgroundImages: BackgroundImages = {
    coverPage: "",
    about: "",
    activities: "",
    counseling: "",
    prayer: "",
    articles: ""
  };

  constructor(private _imageService: ImagesServiceService) { }

  ngOnInit(): void {
    this.getBackgroundImages()
      .then(res => {
        this.setImages(res);
        this.setInElementsIdAndBackground(this.pages, this.backgroundImages);
      });

  }

  getBackgroundImages() {
    return new Promise((res, rej) => {
      this._imageService.getImagesPortada()
        .subscribe(item => {
          let dataRes = new Array;
          item.forEach(element => {
            dataRes.push(element.payload.doc.data());
            res(dataRes);
          })
        })

    })
  }

  setInElementsIdAndBackground(idName: Array<string>, background: BackgroundImages) {
    Object.entries(background).forEach(([key, value], index) => {
      this.coverPage = document.querySelector(`#${idName[index]}`);
      this.coverPage.style.background = `#f3f3 url('${value}') no-repeat center`;
      this.coverPage.style.backgroundSize = "cover";
      this.coverPage.style.opacity = "0.5";
    });
  }

  setImages(src: unknown) {
    this.backgroundImages.coverPage = src[0].main[0];
    this.backgroundImages.about = src[0].nosotros[0];
    this.backgroundImages.activities = src[0].actividades[0];
    this.backgroundImages.counseling = src[0].consejos[0];
    this.backgroundImages.prayer = src[0].oracion[0];
    this.backgroundImages.articles = src[0].articulos[0];
  }


}
