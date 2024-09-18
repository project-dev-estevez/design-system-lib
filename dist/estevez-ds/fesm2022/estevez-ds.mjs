import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';

class ButtonComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.4", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.4", type: ButtonComponent, selector: "lib-button", ngImport: i0, template: "<button>\r\n    <ng-content></ng-content>\r\n</button>", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.4", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-button', template: "<button>\r\n    <ng-content></ng-content>\r\n</button>" }]
        }] });

class EstevezDsModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.4", ngImport: i0, type: EstevezDsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.4", ngImport: i0, type: EstevezDsModule, declarations: [ButtonComponent], exports: [ButtonComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.4", ngImport: i0, type: EstevezDsModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.4", ngImport: i0, type: EstevezDsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ButtonComponent
                    ],
                    imports: [],
                    exports: [
                        ButtonComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of estevez-ds
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, EstevezDsModule };
//# sourceMappingURL=estevez-ds.mjs.map
