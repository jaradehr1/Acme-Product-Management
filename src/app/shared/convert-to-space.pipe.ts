import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
    // Replace any of the specified characters in a string with a spaces
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }
}