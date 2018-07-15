import { Injectable } from "@angular/core";

@Injectable()
export abstract class ScclComponentViewResolverService {
    abstract componentViewResolver(element, component);
}