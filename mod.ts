import type { Server } from "saurus/server.ts";
import type { Player } from "saurus/player.ts";

export const config = {
  title: "Welcome",
  subtitle: "to Saurus"
}

export class JoinTitle {

  /**
   * When a player joins, send him a title.
   * @param server Server to activate the plugin on
   */
  constructor(readonly player: Player) {
    this.init()
  }

  private async init() {
    const { title, subtitle } = config
    await this.player.title(title, subtitle)
  }
}