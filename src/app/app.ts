import { TuiRoot } from '@taiga-ui/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../widgets/header/ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, Header],
  templateUrl: './app.html',
  styleUrl: './app.less',
})
export class App {}
