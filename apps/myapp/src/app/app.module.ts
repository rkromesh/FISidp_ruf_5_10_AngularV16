import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Don't like animations? Replace this with NoopAnimationsModule
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import {
  RufAppCanvasModule,
  RufLayoutModule,
  RufBannerModule,
  RufFooterModule,
  RufIconModule,
  RufMenubarModule,
  RufNavbarModule,
  RufPageHeaderModule,
  RufCommonModule,
} from '@ruf/shell';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { AuthModule } from '@ruf/idp-auth';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RufAppCanvasModule,
    RufLayoutModule,
    RufBannerModule,
    RufFooterModule,
    RufIconModule,
    RufMenubarModule,
    RufNavbarModule,
    RufPageHeaderModule,
    RufCommonModule,
    MatButtonModule,
    // below code is need to work idp auth
    HttpClientModule,
   /*  AuthModule.forRoot({
    //replace below configuration with your service provider configuration
    issuer: 'https://infinity.dev.fiscloudservices.com/idp/RUFQA4', // the idp firm URL
    clientId: 'test-service-provider_1', // the IdP Service provider name
    dummyClientSecret: '6c5494360dede04fb309010056e64f16339b', // needed for the authorization code grant flow
    redirectUri: 'http://localhost:4200/', // this should be same as Application URL configured in service provider
    autoRefresh: true, // if true, automatically refreshes token before it expires. Default is false.
    listenToToken: 'id_token', // which token to listen to, for automatically refreshing. Possible values are 'id_token', 'access_token' and 'any'.
    idpLogoutUrl: 'https://infinity.dev.fiscloudservices.com/idp/RUFQA4/globalLogout.html' // idp global logout url like https://infinity.dev.fiscloudservices.com/idp/RUFQA4/globalLogout.html
    }) */

    /*  AuthModule.forRoot({
      //replace below configuration with your service provider configuration
      issuer: 'https://login2-uat.fisglobal.com/idp/QRWDEVFirm', // the idp firm URL
      clientId: 'QRWclientId', // the IdP Service provider name
      dummyClientSecret: 'c58d29350eb2604a6a0896e0db84d4179d6c',
      redirectUri: 'http://localhost:4200/', // this should be same as Application URL configured in service provider
      authorizationClaimProperty: 'SP_QRWDEVFIRM_QRWCLIENTID', // The authorization property from 'claims'. Defaults to 'AuthorizationList'
      // autoRefresh: true, // if true, automatically refreshes token before it expires. Default is false.
      // listenToToken: 'id_token' // which token to listen to, for automatically refreshing. Possible values are 'id_token', 'access_token' and 'any'.

      }) */


    /* AuthModule.forRoot({
      //replace below configuration with your service provider configuration
      issuer: 'https://login2-uat.fisglobal.com/idp/QRWDEVFirm', // the idp firm URL
      clientId: 'QRWOPenIDSP_ClientID', // the IdP Service provider name
      dummyClientSecret: '650fc98609605045ac0b7d00d7c3f17d5d45',
      redirectUri: 'http://localhost:4200/', // this should be same as Application URL configured in service provider
      authorizationClaimProperty: 'SP_QRWDEVFIRM_QRWOPENIDSP_CLIENTID', // The authorization property from 'claims'. Defaults to 'AuthorizationList'
      idpLogoutUrl: 'https://login2-uat.fisglobal.com/idp/QRWDEVFirm/globalLogout.html'
      // autoRefresh: true, // if true, automatically refreshes token before it expires. Default is false.
      // listenToToken: 'id_token' // which token to listen to, for automatically refreshing. Possible values are 'id_token', 'access_token' and 'any'.

      }) */

      AuthModule.forRoot({
        //replace below configuration with your service provider configuration
        issuer: 'https://login2-uat.fisglobal.com/idp/QRWDEVFirm', // the idp firm URL
        clientId: 'QRW_SAML2_clientId', // the IdP Service provider name
        // dummyClientSecret: '650fc98609605045ac0b7d00d7c3f17d5d45',
        redirectUri: 'http://localhost:4200/', // this should be same as Application URL configured in service provider
        authorizationClaimProperty: 'SP_QRWDEVFIRM_QRW_SAML2_CLIENTID', // The authorization property from 'claims'. Defaults to 'AuthorizationList'
        idpLogoutUrl: 'https://login2-uat.fisglobal.com/idp/QRWDEVFirm/globalLogout.html'
        // autoRefresh: true, // if true, automatically refreshes token before it expires. Default is false.
        // listenToToken: 'id_token' // which token to listen to, for automatically refreshing. Possible values are 'id_token', 'access_token' and 'any'.

        })
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
