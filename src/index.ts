import { test } from './test';
test();

import { combineLatest, of } from 'rxjs';
import { map, filter, take, shareReplay } from 'rxjs/operators'; // eslint-disable-line

async function main(): Promise<void> {
  const dataSource1 = of(100);
  const dataSource2 = of(8, 6, 5, 4, 3, 2);

  const source = combineLatest(dataSource1, dataSource2)
    .pipe(take(3))
    .pipe(shareReplay());

  source.subscribe(([i1, i2]: [number, number]): void => {
    console.log(i1 + i2);
  });

  source.subscribe(([i1, i2]: [number, number]): void => {
    console.log([i1, i2]);
  });
}

main();
