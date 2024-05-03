**1. In this commit:**
I learned

- create react app using vite
- project file **structure**
- file extension **.jsx**
- **export**/import, default/naming
- **dynamic** Component/content { using this }
- how to **create** Component and **export**
- how to **use** Component and **import**
- and how to **reuse** Component
- we use **'className'** instance of 'class'
- **nesting** comp.
- how to add **css** in React
- and last basic **Bootstrap**

- last but not least, create a ToDo app UI page

How to **deploy** on GitHub a **react** + **vite** app

- setup base in vite.cofig
  _base: "/[GitHub-Repo-Name]/"_

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

  ```

- Add, Commit and Push to GitHub
- Active workflow (GitHub on webpage)

  ```bash
        Config > Actions > General > Workflow permissions > Read and Write permissions

        Actions > failed deploy > re-run-job failed jobs

        Pages > gh-pages > save

  ```

**2. In this commit:**
I learned

- Fragements <>...</>
- **Map** method
  ```bash
    {items.map(*item*=><li>{*item*}</li>)}
  ```
- **key props**
  ```bash
    <div **key**={item.id}>...</div>
  ```
- **Conditional Rendering**

  - \*Ternary opr. **?:\***, \*logical opr. **&&\***

    ```bash
      con ? value1 : value2
      {items === 0 ? <h3> Con id true </h3> : null;}
      con && con
      {items === 0 && <h3> Con id true </h3>}

    ```

- \*passing Data Via **props\***

  ```bash
    //APP.jsx
    let myData = [1,2,3];
    <HeaderComp myPropName={myData}></HeaderCopm>
    <FooterComp myPropName={myData}></FooterComp>

    //HeaderComp.jsx
    //using destructuring method
    export default function HeaderComp({myPropName}) {
      return(<p>{myPropName[0]}</p>);

    //FooterComp.jsx
    export default function FooterComp(prop) {
      return(<p>{prop.myPropName[0]}</p>);
    }

  ```

- **CSS Modules**

  - file ext. **fileNmae.modules.css**
  - ex: **NavComp.modules.css**

    ```bash
      //APP.jsx
      <HeaderComp></HeaderCopm>
      <NavComp></NavComp>

      //NavComp.modules.css
      .navMenu { bg-c: blue;}
      .navBtn { bg-c: black;}

      //NavComp.jsx
      import styles from './NavrComp.modules.css'

      export default function NavComp() {
        return(

                <p className={styles.navMenu}> this is color blue </p>
                <p className={styles.navBtn}> this is color black </p>
              );
        }
    ```

- last but not least, update ToDo app
- last but not least, update ToDo app
