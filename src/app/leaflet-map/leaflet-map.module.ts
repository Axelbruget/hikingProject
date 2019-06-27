import { NgModule } from '@angular/core';
import { LeafletMapComponent} from './leaflet-map.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        LeafletMapComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        RouterModule
    ],
    exports: [
        LeafletMapComponent
    ]
})
export class LeafletMapModule {}
