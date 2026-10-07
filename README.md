This repository contains the source code for the SlimeKnights Developer Documentation. Upon new commits, it will automatically update the site at  https://slimeknights.github.io/.

This site is coded using [Jekyll](https://jekyllrb.com/) with the [minima v2.5](https://github.com/jekyll/minima/tree/2.5-stable) theme

## Contributing

If you wish to contribute to development of the SlimeKnights documentation, you can do a lot of it directly using the editor on GitHub. However, the best way would be to clone the repository locally, then install Jekyll to allow you to preview your changes on a local site before committing or making a pull request.

We will typically create [Issues](https://github.com/SlimeKnights/slimeknights.github.io/issues) for anything that needs work on the website. Anything labeled "pull request candidate" should be reasonable to start work on for a pull request. If you are interested in working on any of those features, or have a suggestion for something not on the list, reach out on [our discord](https://discord.gg/njGrvuh) in the #slimeknights-documentation channe.

For more information on contributing, check out the [Wiki Tab](https://github.com/SlimeKnights/slimeknights.github.io/wiki).

## Setup

To setup Jekyll to test changes locally, first follow the instructions to [install Jekyll and Bundler](https://jekyllrb.com/docs/installation/) on your system. Assuming you already have Ruby installed, this should be as simple as:
```
gem install jekyll bundler
```

Once Jekyll and Bundler are installed, you can launch the website using
```
bundle exec jekyll serve
```
Which will make it available at http://localhost:4000.
