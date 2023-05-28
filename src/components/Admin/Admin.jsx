import React from "react";
import AppContext from "../../context";

import styles from "../Admin/Admin.module.scss";

function Admin() {
  const { handleLogout } = React.useContext(AppContext);
  return (
    <div>
      <section className={styles.greed_section}>
        <div className={styles.siteperfomance}>
          <h2>Site performance</h2>
          <div className={styles.info}>
            <p>Today vs 7 days ago</p>
            <p>May 03, 22 to June 02, 22</p>
          </div>

          <div className={styles.blocks}>
            <div className={styles.block}>
              <div className={styles.block_info}>
                <h2>Page views</h2>
                <img src={process.env.PUBLIC_URL + "/img/Show.png"} alt="" />
              </div>
              <h1>1.5K</h1>
              <div className={styles.block_static}>
                <h3>+200 (16,20%)</h3>
                <img src={process.env.PUBLIC_URL + "/img/Swap.svg"} alt="" />
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.block_info}>
                <h2>Top product</h2>
                <img src={process.env.PUBLIC_URL + "/img/Chart.png"} alt="" />
              </div>
              <img
                className={styles.sneaker_logo}
                width={100}
                height={100}
                src={process.env.PUBLIC_URL + "/img/sneakers/1.png"}
                alt=""
              />
              <div className={styles.block_static}>
                <h3>MSI NVIDIA GeForce RTX 4090</h3>
                <img src={process.env.PUBLIC_URL + "/img/Swap.svg"} alt="" />
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.block_info}>
                <h2>New costomers</h2>
                <img src={process.env.PUBLIC_URL + "/img/Show.png"} alt="" />
              </div>
              <h1>15.5%</h1>
              <div className={styles.block_static}>
                <h3 className={styles.h_error}>-0.74 (0.74%)</h3>
                <img src={process.env.PUBLIC_URL + "/img/Swap.svg"} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.userperfomance}>
          <h2>Users statistics</h2>
          <div className={styles.info}>
            <p>Today’s statistics</p>
            <p>May 03, 22 to June 02, 22</p>
          </div>

          <div className={styles.blocks}>
            <div className={styles.table}>
              <table>
                <tr className={styles.trans}>
                  <th className={styles.No}>No</th>
                  <th className={styles.Name}>Name</th>
                  <th className={styles.Product}>Product</th>
                  <th className={styles.Address}>Address</th>
                  <th className={styles.Price}>Price</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>John Mandle</td>
                  <td>Видеокарта MSI NVIDIA GeForce RTX 4090</td>
                  <td>123 Main Street, Los Angeles, CA 90001</td>
                  <td>199 990 RUB.</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jane Wood</td>
                  <td>Видеокарта MSI NVIDIA GeForce RTX 2080</td>
                  <td>456 High Street, Miami, FL 33130</td>
                  <td>172 990 RUB.</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Ashley Johnson</td>
                  <td>Видеокарта MSI NVIDIA GeForce RTX 4090</td>
                  <td>123 Oak St, Chicago, IL 60611</td>
                  <td>199 990 RUB.</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Tyler Williams</td>
                  <td>Видеокарта MSI NVIDIA GeForce RTX 2080</td>
                  <td>789 Park Ave, New York, NY 10001</td>
                  <td>172 990 RUB.</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Kevin Brown</td>
                  <td>Видеокарта MSI NVIDIA GeForce RTX 4090</td>
                  <td>246 Main St, San Francisco, CA 94102</td>
                  <td>199 990 RUB.</td>
                </tr>
              </table>
            </div>

            <div className={styles.block}>
              <div className={styles.block_info}>
                <h2>Remaining Products</h2>
                <img src={process.env.PUBLIC_URL + "/img/Show.png"} alt="" />
              </div>
              <div className={styles.chart_container}>
                <div className={styles.chart_bar_first} height={120}>
                  <p>MSI NVIDIA GeForce RTX 4090</p>
                  <br />
                  120
                </div>
                <div className={styles.chart_bar_sec} height={200}>
                  <p>MSI NVIDIA GeForce RTX 2080</p>
                  <br />
                  200
                </div>
                <div className={styles.chart_bar_thrd} height={90}>
                  <p>PALIT NVIDIA GeForce RTX 2070</p>
                  <br />
                  90
                </div>
                <div className={styles.chart_bar_four} height={170}>
                  <p> Gainward GeForce RTX 2070 SUPER Phoenix V1</p>
                  <br />
                  170
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
}
export default Admin;
