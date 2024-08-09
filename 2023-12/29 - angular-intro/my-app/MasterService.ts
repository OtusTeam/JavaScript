import {ValueService} from "./ValueService";

class MasterService {
  constructor(private valueService:ValueService) {
  }

  getValue() {

    const value = this.valueService.getValue();

    if (value > 100) {
      return value + 1;
    } else {

      return value - 5;
    }
  }
}
