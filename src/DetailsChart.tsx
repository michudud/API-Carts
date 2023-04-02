import React, { useEffect, useRef } from "react";

const DetailsChart = ({ products }) => {
  window.scrollTo(0, 0);
  const dataSetWidth = (100 / products.length / 100) * 840;
  const maxPrice = 1.2 * Math.max(...products.map((prod) => prod.price));
  const maxChartValue = maxPrice;
  const intervalNum = 6;
  let valueInterval = [];
  for (let i = 0; i < intervalNum; i++) {
    valueInterval.push(Math.round(maxChartValue / intervalNum) * (i + 1));
  }

  return (
    <div className="DetailsChart">
      <svg viewBox="0 0 1000 800">
        {/* axes */}
        <path
          d="M 100 20 L 100 460 M 95 35 L 100 20 105 35 M 60 420 L 980 420 M 965 415 L 980 420 965 425"
          stroke="black"
          strokeWidth="2"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <text
          x="80"
          y="20"
          stroke="black"
          dominantBaseline="hanging"
          textAnchor="end"
        >
          price
        </text>
        {/* /axes */}
        {/* y-axis names */}
        {valueInterval.map((value, index) => {
          return (
            <g key={"y-axis" + index + new Date().getTime()}>
              <line
                x1="95"
                y1={420 - (value / maxChartValue) * 340 - 6}
                x2="105"
                y2={420 - (value / maxChartValue) * 340 - 6}
                stroke="black"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
              <text
                x="80"
                y={420 - (value / maxChartValue) * 340 - 6}
                dominantBaseline="middle"
                textAnchor="end"
              >
                {value}
              </text>
            </g>
          );
        })}
        {/* /y-axis names */}
        {/* chart */}
        <svg x="100" y="80" width="880">
          {products.map((product, index) => {
            return (
              <g key={"point" + index + new Date().getTime()}>
                {/* x-axis names */}
                <line
                  x1={dataSetWidth * index + dataSetWidth / 2}
                  y1="335"
                  x2={dataSetWidth * index + dataSetWidth / 2}
                  y2="345"
                  stroke="black"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
                <svg x={dataSetWidth * index + dataSetWidth / 2} y="360">
                  <text x="0" y="0" transform="rotate(80)">
                    {product.title}
                  </text>
                </svg>
                {/* /x-axis names */}
                {/* lines */}
                {products[index + 1] ? (
                  <g>
                    <line
                      x1={dataSetWidth * index + dataSetWidth / 2}
                      y1={340 - (product.price / maxChartValue) * 340 - 6}
                      x2={dataSetWidth * (index + 1) + dataSetWidth / 2}
                      y2={
                        340 -
                        (products[index + 1].price / maxChartValue) * 340 -
                        6
                      }
                      stroke="blue"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />
                    <line
                      x1={dataSetWidth * index + dataSetWidth / 2}
                      y1={
                        340 -
                        (product.discountedPrice /
                          product.quantity /
                          maxChartValue) *
                          340 -
                        6
                      }
                      x2={dataSetWidth * (index + 1) + dataSetWidth / 2}
                      y2={
                        340 -
                        (products[index + 1].discountedPrice /
                          products[index + 1].quantity /
                          maxChartValue) *
                          340 -
                        6
                      }
                      stroke="green"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />
                  </g>
                ) : null}
                {/* /lines */}
                {/* circle points */}
                <circle
                  cx={dataSetWidth * index + dataSetWidth / 2}
                  cy={340 - (product.price / maxChartValue) * 340 - 6}
                  r="6"
                  fill="blue"
                />
                <circle
                  cx={dataSetWidth * index + dataSetWidth / 2}
                  cy={340 - (product.price / maxChartValue) * 340 - 6}
                  r="4"
                  fill="lightblue"
                />
                <circle
                  cx={dataSetWidth * index + dataSetWidth / 2}
                  cy={
                    340 -
                    (product.discountedPrice /
                      product.quantity /
                      maxChartValue) *
                      340 -
                    6
                  }
                  r="6"
                  fill="green"
                />
                <circle
                  cx={dataSetWidth * index + dataSetWidth / 2}
                  cy={
                    340 -
                    (product.discountedPrice /
                      product.quantity /
                      maxChartValue) *
                      340 -
                    6
                  }
                  r="4"
                  fill="lightgreen"
                />
                {/* /circle points */}
              </g>
            );
          })}
        </svg>
        {/* /chart */}
        {/* legend */}
        <g>
          <rect
            x="330"
            y="10"
            width="360"
            height="40"
            stroke="#404040"
            fill="none"
          />
          <g>
            <line
              x1="350"
              y1="30"
              x2="380"
              y2="30"
              stroke="blue"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
            <text x="390" y="30" dominantBaseline="middle" textAnchor="start">
              price
            </text>
          </g>
          <g>
            <line
              x1="500"
              y1="30"
              x2="530"
              y2="30"
              stroke="green"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
            <text x="540" y="30" dominantBaseline="middle" textAnchor="start">
              discounted price
            </text>
          </g>
        </g>
        {/* /legend */}
      </svg>
    </div>
  );
};

export default DetailsChart;
