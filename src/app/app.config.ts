import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset } from "@primeng/themes";
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withHashLocation,
  withInMemoryScrolling,
  withRouterConfig,
  withViewTransitions
} from '@angular/router';

import { DropdownModule, SidebarModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { routes } from './app.routes';
import {VERSION as MAT_VERSION, MatNativeDateModule} from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      }),
      withEnabledBlockingInitialNavigation(),
      withViewTransitions(),
      withHashLocation()
    ),
    importProvidersFrom(SidebarModule, DropdownModule, MatNativeDateModule),
    IconSetService,
    provideAnimations(), provideAnimationsAsync(),
    provideZoneChangeDetection({ eventCoalescing: true }),
      provideAnimationsAsync(),
      providePrimeNG({
      theme: {
        preset: definePreset(Aura, {
          semantic: {
            primary: {
              50: "{blue.50}",
              100: "{blue.100}",
              200: "{blue.200}",
              300: "{blue.300}",
              400: "{blue.400}",
              500: "{blue.500}",
              600: "{blue.600}",
              700: "{blue.700}",
              800: "{blue.800}",
              900: "{blue.900}",
              950: "{blue.950}",
            },
            colorScheme: {
              dark: {
                surface: {
                  50: "{slate.50}",
                  100: "{slate.100}",
                  200: "{slate.200}",
                  300: "{slate.300}",
                  400: "{slate.400}",
                  500: "{slate.500}",
                  600: "{slate.600}",
                  700: "{slate.700}",
                  800: "{slate.800}",
                  900: "{slate.900}",
                  950: "{slate.950}",
                },
              },
              light: {
                surface: {
                  50: "{slate.50}",
                  100: "{slate.100}",
                  200: "{slate.200}",
                  300: "{slate.300}",
                  400: "{slate.400}",
                  500: "{slate.500}",
                  600: "{slate.600}",
                  700: "{slate.700}",
                  800: "{slate.800}",
                  900: "{slate.900}",
                  950: "{slate.950}",
                },
              },
            },
          },
        }),
      },
    })
  ]
};



