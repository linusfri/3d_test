{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{
  packages = [
    pkgs.git
    pkgs.deno
    pkgs.gh
  ];

  languages.typescript.enable = true;

  processes.carrosHorses.exec = "deno run --allow-net --allow-read --allow-env ./main.ts";
}
