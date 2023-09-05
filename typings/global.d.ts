declare module '*.css' {
  const classes: any
  export = classes
}

declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}
