import { TestBed, inject } from '@angular/core/testing';

import { IntercambioInformacionService } from './intercambio-informacion.service';

describe('IntercambioInformacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntercambioInformacionService]
    });
  });

  it('should be created', inject([IntercambioInformacionService], (service: IntercambioInformacionService) => {
    expect(service).toBeTruthy();
  }));
});
