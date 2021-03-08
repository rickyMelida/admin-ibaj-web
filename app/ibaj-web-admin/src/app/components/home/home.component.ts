import { Component, OnInit } from '@angular/core';
import { BackgroundImages } from 'src/app/interfaces/background-images.interfaces';
import { ImagesServiceService } from "../../services/images-service/images-service.service";
import { AuthServiceService } from '../../services/auth-service/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  userExist: boolean;

  constructor(private _imageService: ImagesServiceService, private _sesion: AuthServiceService) { }

  ngOnInit(): void {
    this.userExist = this._sesion.existUser();

    if(this.userExist) {
      this.getBackgroundImages()
      .then(res => {
        this.backgroundImages.coverPage = res[0].main[0];
        this.backgroundImages.about = res[0].nosotros[0];
        this.backgroundImages.activities = res[0].actividades[0];
        this.backgroundImages.counseling = res[0].consejos[0];
        this.backgroundImages.prayer = res[0].oracion[0];
        this.backgroundImages.articles = res[0].articulos[0];

        this.setInElementsIdAndBackground(this.pages, this.backgroundImages);
      });
    }
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

  logout() {
    this._sesion.logout();
  }


}
