import {Injectable} from '@angular/core'
@Injectable()
    export class todoservice{
        items1 =[];
        pushItem(to)
        {
            this.items1.push(to);
        }
        removeItem(index)
        {
            this.items1.splice(index,1);
        }
        getlist()
        {
            return this.items1;
        }
    }