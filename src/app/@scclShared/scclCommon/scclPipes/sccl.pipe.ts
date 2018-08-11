import {Pipe, PipeTransform} from '@angular/core';
import { scclContants } from '../scclContants/sccl.constants';
import { TranslateService } from '@ngx-translate/core';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';


@Pipe({name: 'scclPngExt'})
export class ScclPngExtPipe implements PipeTransform {

  transform(input: any, ext = 'png'): string {
<<<<<<< HEAD
=======
    console.log(input);
>>>>>>> 5539d2f61bba607193bb36cbf255176783dfb904
    return scclContants.srcUrl.root + input + '.' + ext;
  }
}

@Pipe({name: 'scclSvgExt'})
export class ScclSvgExtPipe implements PipeTransform {

  transform(input: string, ext = 'svg'): string {
    return scclContants.srcUrl.root + input + '.' + ext;
  }
}


@Pipe({name: 'scclSelect'})
export class ScclSelectPipe implements PipeTransform {
    constructor(private translate: TranslateService) {
        
    }
  transform(input: string) {
      return input;
  }
}


@Pipe({name: 'scclSearchFilterPipe'})
export class ScclSearchFilterPipe implements PipeTransform {

  transform(input: Array<Object>) {
    
    }
}

