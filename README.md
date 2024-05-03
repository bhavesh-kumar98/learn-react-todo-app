In this commit.
I learned 
  - create react app using vite
  - project file **structure**
  - file extension **.jsx**
  - **export**/import, default/naming
  - **dynamic** Component/content { using this }
  - how to **create** Component and **export**
  - how to **use** Component and **import**
  - and how to **reuse** Component
  - we use **'className'** instance  of 'class'
  - **nesting** comp.
  - how to add **css** in React
  - and last basic **Bootstrap** 

  - last but not least, create a ToDo app UI page 

How to **deploy** on GitHub a **react** + **vite** app
  - setup base in vite.cofig
    *base: "/[GitHub-Repo-Name]/"*

  - Create ./github/workflows/deploy.yml and add the code bellow
    ```bash
  name: Deploy

  on:
    push:
      branches:
        - main

  jobs:
    build:
      name: Build
      runs-on: ubuntu-latest

      steps:
        - name: Checkout repo
          uses: actions/checkout@v2

        - name: Setup Node
          uses: actions/setup-node@v1
          with:
            node-version: 16

        - name: Install dependencies
          uses: bahmutov/npm-install@v1

        - name: Build project
          run: npm run build

        - name: Upload production-ready build files
          uses: actions/upload-artifact@v2
          with:
            name: production-files
            path: ./dist

    deploy:
      name: Deploy
      needs: build
      runs-on: ubuntu-latest
      if: github.ref == 'refs/heads/main'

      steps:
        - name: Download artifact
          uses: actions/download-artifact@v2
          with:
            name: production-files
            path: ./dist

        - name: Deploy to GitHub Pages
          uses: peaceiris/actions-gh-pages@v3
          with:
            github_token: ${{ secrets.GITHUB_TOKEN }}
            publish_dir: ./dist



  - Add, Commit and Push to GitHub

  - Active workflow (GitHub on webpage)
```bash
    Config > Actions > General > Workflow permissions > Read and Write permissions

```bash
     Actions > failed deploy > re-run-job failed jobs 

```bash
    Pages > gh-pages > save
