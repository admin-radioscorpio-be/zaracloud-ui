import { Pipe, PipeTransform } from "@angular/core";
import { Messages } from "./en.messages";
import { getMessages } from "./i18n";

@Pipe({
  name: "translate",
  standalone: true,
})
export class TranslatePipe implements PipeTransform {
  transform(value: keyof Messages): string {
    return getMessages()[value] ?? value;
  }
}
