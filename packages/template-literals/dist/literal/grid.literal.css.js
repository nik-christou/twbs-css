export const GridCssTemplateLiteral = `
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.row > * {
  -ms-flex-negative: 0;
      flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}

.col {
  -ms-flex: 1 0 0%;
      flex: 1 0 0%;
}

.row-cols-auto > * {
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  width: auto;
}

.row-cols-1 > * {
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  width: 100%;
}

.row-cols-2 > * {
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  width: 50%;
}

.row-cols-3 > * {
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  width: 33.3333333333%;
}

.row-cols-4 > * {
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  width: 25%;
}

.row-cols-5 > * {
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  width: 20%;
}

.row-cols-6 > * {
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  width: 16.6666666667%;
}

.col-auto {
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  width: auto;
}

.col-1 {
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  width: 8.33333333%;
}

.col-2 {
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  width: 16.66666667%;
}

.col-3 {
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  width: 33.33333333%;
}

.col-5 {
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  width: 41.66666667%;
}

.col-6 {
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  width: 50%;
}

.col-7 {
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  width: 58.33333333%;
}

.col-8 {
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  width: 66.66666667%;
}

.col-9 {
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  width: 75%;
}

.col-10 {
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  width: 83.33333333%;
}

.col-11 {
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  width: 91.66666667%;
}

.col-12 {
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  width: 100%;
}

.offset-1 {
  margin-left: 8.33333333%;
}

.offset-2 {
  margin-left: 16.66666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.33333333%;
}

.offset-5 {
  margin-left: 41.66666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.33333333%;
}

.offset-8 {
  margin-left: 66.66666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.33333333%;
}

.offset-11 {
  margin-left: 91.66666667%;
}

.g-0,
.gx-0 {
  --bs-gutter-x: 0;
}

.g-0,
.gy-0 {
  --bs-gutter-y: 0;
}

.g-1,
.gx-1 {
  --bs-gutter-x: 0.25rem;
}

.g-1,
.gy-1 {
  --bs-gutter-y: 0.25rem;
}

.g-2,
.gx-2 {
  --bs-gutter-x: 0.5rem;
}

.g-2,
.gy-2 {
  --bs-gutter-y: 0.5rem;
}

.g-3,
.gx-3 {
  --bs-gutter-x: 1rem;
}

.g-3,
.gy-3 {
  --bs-gutter-y: 1rem;
}

.g-4,
.gx-4 {
  --bs-gutter-x: 1.5rem;
}

.g-4,
.gy-4 {
  --bs-gutter-y: 1.5rem;
}

.g-5,
.gx-5 {
  --bs-gutter-x: 3rem;
}

.g-5,
.gy-5 {
  --bs-gutter-y: 3rem;
}

@media (min-width: 576px) {
  .col-sm {
    -ms-flex: 1 0 0%;
        flex: 1 0 0%;
  }
  .row-cols-sm-auto > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: auto;
  }
  .row-cols-sm-1 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-sm-2 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-sm-3 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-sm-4 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-sm-5 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-sm-6 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-sm-auto {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: auto;
  }
  .col-sm-1 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-sm-2 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-sm-3 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 25%;
  }
  .col-sm-4 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-sm-5 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-sm-6 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 50%;
  }
  .col-sm-7 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-sm-8 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-sm-9 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 75%;
  }
  .col-sm-10 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-sm-11 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-sm-12 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 100%;
  }
  .offset-sm-0 {
    margin-left: 0;
  }
  .offset-sm-1 {
    margin-left: 8.33333333%;
  }
  .offset-sm-2 {
    margin-left: 16.66666667%;
  }
  .offset-sm-3 {
    margin-left: 25%;
  }
  .offset-sm-4 {
    margin-left: 33.33333333%;
  }
  .offset-sm-5 {
    margin-left: 41.66666667%;
  }
  .offset-sm-6 {
    margin-left: 50%;
  }
  .offset-sm-7 {
    margin-left: 58.33333333%;
  }
  .offset-sm-8 {
    margin-left: 66.66666667%;
  }
  .offset-sm-9 {
    margin-left: 75%;
  }
  .offset-sm-10 {
    margin-left: 83.33333333%;
  }
  .offset-sm-11 {
    margin-left: 91.66666667%;
  }
  .g-sm-0,
  .gx-sm-0 {
    --bs-gutter-x: 0;
  }
  .g-sm-0,
  .gy-sm-0 {
    --bs-gutter-y: 0;
  }
  .g-sm-1,
  .gx-sm-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-sm-1,
  .gy-sm-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-sm-2,
  .gx-sm-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-sm-2,
  .gy-sm-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-sm-3,
  .gx-sm-3 {
    --bs-gutter-x: 1rem;
  }
  .g-sm-3,
  .gy-sm-3 {
    --bs-gutter-y: 1rem;
  }
  .g-sm-4,
  .gx-sm-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-sm-4,
  .gy-sm-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-sm-5,
  .gx-sm-5 {
    --bs-gutter-x: 3rem;
  }
  .g-sm-5,
  .gy-sm-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 768px) {
  .col-md {
    -ms-flex: 1 0 0%;
        flex: 1 0 0%;
  }
  .row-cols-md-auto > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: auto;
  }
  .row-cols-md-1 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-md-2 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-md-3 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-md-4 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-md-5 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-md-6 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-md-auto {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: auto;
  }
  .col-md-1 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-md-2 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-md-3 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 25%;
  }
  .col-md-4 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-md-5 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-md-6 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 50%;
  }
  .col-md-7 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-md-8 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-md-9 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 75%;
  }
  .col-md-10 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-md-11 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-md-12 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 100%;
  }
  .offset-md-0 {
    margin-left: 0;
  }
  .offset-md-1 {
    margin-left: 8.33333333%;
  }
  .offset-md-2 {
    margin-left: 16.66666667%;
  }
  .offset-md-3 {
    margin-left: 25%;
  }
  .offset-md-4 {
    margin-left: 33.33333333%;
  }
  .offset-md-5 {
    margin-left: 41.66666667%;
  }
  .offset-md-6 {
    margin-left: 50%;
  }
  .offset-md-7 {
    margin-left: 58.33333333%;
  }
  .offset-md-8 {
    margin-left: 66.66666667%;
  }
  .offset-md-9 {
    margin-left: 75%;
  }
  .offset-md-10 {
    margin-left: 83.33333333%;
  }
  .offset-md-11 {
    margin-left: 91.66666667%;
  }
  .g-md-0,
  .gx-md-0 {
    --bs-gutter-x: 0;
  }
  .g-md-0,
  .gy-md-0 {
    --bs-gutter-y: 0;
  }
  .g-md-1,
  .gx-md-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-md-1,
  .gy-md-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-md-2,
  .gx-md-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-md-2,
  .gy-md-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-md-3,
  .gx-md-3 {
    --bs-gutter-x: 1rem;
  }
  .g-md-3,
  .gy-md-3 {
    --bs-gutter-y: 1rem;
  }
  .g-md-4,
  .gx-md-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-md-4,
  .gy-md-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-md-5,
  .gx-md-5 {
    --bs-gutter-x: 3rem;
  }
  .g-md-5,
  .gy-md-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 992px) {
  .col-lg {
    -ms-flex: 1 0 0%;
        flex: 1 0 0%;
  }
  .row-cols-lg-auto > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: auto;
  }
  .row-cols-lg-1 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-lg-2 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-lg-3 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-lg-4 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-lg-5 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-lg-6 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-lg-auto {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: auto;
  }
  .col-lg-1 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-lg-2 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-lg-3 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 25%;
  }
  .col-lg-4 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-lg-5 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-lg-6 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 50%;
  }
  .col-lg-7 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-lg-8 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-lg-9 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 75%;
  }
  .col-lg-10 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-lg-11 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-lg-12 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 100%;
  }
  .offset-lg-0 {
    margin-left: 0;
  }
  .offset-lg-1 {
    margin-left: 8.33333333%;
  }
  .offset-lg-2 {
    margin-left: 16.66666667%;
  }
  .offset-lg-3 {
    margin-left: 25%;
  }
  .offset-lg-4 {
    margin-left: 33.33333333%;
  }
  .offset-lg-5 {
    margin-left: 41.66666667%;
  }
  .offset-lg-6 {
    margin-left: 50%;
  }
  .offset-lg-7 {
    margin-left: 58.33333333%;
  }
  .offset-lg-8 {
    margin-left: 66.66666667%;
  }
  .offset-lg-9 {
    margin-left: 75%;
  }
  .offset-lg-10 {
    margin-left: 83.33333333%;
  }
  .offset-lg-11 {
    margin-left: 91.66666667%;
  }
  .g-lg-0,
  .gx-lg-0 {
    --bs-gutter-x: 0;
  }
  .g-lg-0,
  .gy-lg-0 {
    --bs-gutter-y: 0;
  }
  .g-lg-1,
  .gx-lg-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-lg-1,
  .gy-lg-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-lg-2,
  .gx-lg-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-lg-2,
  .gy-lg-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-lg-3,
  .gx-lg-3 {
    --bs-gutter-x: 1rem;
  }
  .g-lg-3,
  .gy-lg-3 {
    --bs-gutter-y: 1rem;
  }
  .g-lg-4,
  .gx-lg-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-lg-4,
  .gy-lg-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-lg-5,
  .gx-lg-5 {
    --bs-gutter-x: 3rem;
  }
  .g-lg-5,
  .gy-lg-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1200px) {
  .col-xl {
    -ms-flex: 1 0 0%;
        flex: 1 0 0%;
  }
  .row-cols-xl-auto > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xl-1 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xl-2 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xl-3 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-xl-4 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xl-5 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xl-6 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-xl-auto {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: auto;
  }
  .col-xl-1 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xl-2 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xl-3 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 25%;
  }
  .col-xl-4 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xl-5 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xl-6 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 50%;
  }
  .col-xl-7 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xl-8 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xl-9 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 75%;
  }
  .col-xl-10 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xl-11 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xl-12 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 100%;
  }
  .offset-xl-0 {
    margin-left: 0;
  }
  .offset-xl-1 {
    margin-left: 8.33333333%;
  }
  .offset-xl-2 {
    margin-left: 16.66666667%;
  }
  .offset-xl-3 {
    margin-left: 25%;
  }
  .offset-xl-4 {
    margin-left: 33.33333333%;
  }
  .offset-xl-5 {
    margin-left: 41.66666667%;
  }
  .offset-xl-6 {
    margin-left: 50%;
  }
  .offset-xl-7 {
    margin-left: 58.33333333%;
  }
  .offset-xl-8 {
    margin-left: 66.66666667%;
  }
  .offset-xl-9 {
    margin-left: 75%;
  }
  .offset-xl-10 {
    margin-left: 83.33333333%;
  }
  .offset-xl-11 {
    margin-left: 91.66666667%;
  }
  .g-xl-0,
  .gx-xl-0 {
    --bs-gutter-x: 0;
  }
  .g-xl-0,
  .gy-xl-0 {
    --bs-gutter-y: 0;
  }
  .g-xl-1,
  .gx-xl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-xl-1,
  .gy-xl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-xl-2,
  .gx-xl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-xl-2,
  .gy-xl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-xl-3,
  .gx-xl-3 {
    --bs-gutter-x: 1rem;
  }
  .g-xl-3,
  .gy-xl-3 {
    --bs-gutter-y: 1rem;
  }
  .g-xl-4,
  .gx-xl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-xl-4,
  .gy-xl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-xl-5,
  .gx-xl-5 {
    --bs-gutter-x: 3rem;
  }
  .g-xl-5,
  .gy-xl-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1400px) {
  .col-xxl {
    -ms-flex: 1 0 0%;
        flex: 1 0 0%;
  }
  .row-cols-xxl-auto > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xxl-1 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xxl-2 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xxl-3 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-xxl-4 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xxl-5 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xxl-6 > * {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-xxl-auto {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: auto;
  }
  .col-xxl-1 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xxl-2 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xxl-3 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 25%;
  }
  .col-xxl-4 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xxl-5 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xxl-6 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 50%;
  }
  .col-xxl-7 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xxl-8 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xxl-9 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 75%;
  }
  .col-xxl-10 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xxl-11 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xxl-12 {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: 100%;
  }
  .offset-xxl-0 {
    margin-left: 0;
  }
  .offset-xxl-1 {
    margin-left: 8.33333333%;
  }
  .offset-xxl-2 {
    margin-left: 16.66666667%;
  }
  .offset-xxl-3 {
    margin-left: 25%;
  }
  .offset-xxl-4 {
    margin-left: 33.33333333%;
  }
  .offset-xxl-5 {
    margin-left: 41.66666667%;
  }
  .offset-xxl-6 {
    margin-left: 50%;
  }
  .offset-xxl-7 {
    margin-left: 58.33333333%;
  }
  .offset-xxl-8 {
    margin-left: 66.66666667%;
  }
  .offset-xxl-9 {
    margin-left: 75%;
  }
  .offset-xxl-10 {
    margin-left: 83.33333333%;
  }
  .offset-xxl-11 {
    margin-left: 91.66666667%;
  }
  .g-xxl-0,
  .gx-xxl-0 {
    --bs-gutter-x: 0;
  }
  .g-xxl-0,
  .gy-xxl-0 {
    --bs-gutter-y: 0;
  }
  .g-xxl-1,
  .gx-xxl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-xxl-1,
  .gy-xxl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-xxl-2,
  .gx-xxl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-xxl-2,
  .gy-xxl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-xxl-3,
  .gx-xxl-3 {
    --bs-gutter-x: 1rem;
  }
  .g-xxl-3,
  .gy-xxl-3 {
    --bs-gutter-y: 1rem;
  }
  .g-xxl-4,
  .gx-xxl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-xxl-4,
  .gy-xxl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-xxl-5,
  .gx-xxl-5 {
    --bs-gutter-x: 3rem;
  }
  .g-xxl-5,
  .gy-xxl-5 {
    --bs-gutter-y: 3rem;
  }
}
`;