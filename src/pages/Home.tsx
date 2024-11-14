import { AvatarList, CardComponent, CustomChart, CustomTable, Header, StyledH2, StyledH3, StyledSpan } from '@/components'
import { Link } from 'react-router-dom'

// HOOKS
import { useGet } from '@/hooks'

// MUI
import { Container, Grid2 } from '@mui/material'

// UTILS
import { currencyConverter, highlightTextConverter } from '@/utils'

// TYPES
import { CustomChartProps, HighlightsData, NewsData, StarsData } from '@/types'

function Home() {
    // HIGHLIGHTS
    const {
        data: highlightsData,
        loading: highlightsLoading,
        error: highlightsError,
    } = useGet<HighlightsData[]>('sales/highlights')

    // SALES PER MONTH
    const {
        data: salesPerMonthData,
        loading: salesPerMonthLoading,
        error: salesPerMonthError,
    } = useGet<CustomChartProps>('sales/month')

    // SALES STARS
    const {
        data: salesStarsData,
        loading: salesStarsLoading,
        error: salesStarsError,
    } = useGet<StarsData[]>('sales/stars')

    // NEWS
    const {
        data: newsData,
        loading: newsLoading,
        error: newsError,
    } = useGet<NewsData[]>('news')

    // YEAR
    const {
        data: salesYearData,
        loading: salesYearLoading,
        error: salesYearError,
    } = useGet<CustomChartProps>('sales/year')

    return (
        <>
            <Header />
            <Container className="mb-2" maxWidth="lg">
                <Grid2 container spacing={4}>
                    {!highlightsError && (
                        <>
                            <Grid2 sx={{ xs: 12, md: 4 }}>
                                <CardComponent
                                    className={
                                        highlightsLoading
                                            ? 'skeleton-loading skeleton-loading-mh-1'
                                            : ''
                                    }
                                    id="total-sales"
                                >
                                    {!highlightsLoading && highlightsData && (
                                        <>
                                            <StyledH2 className="mb-1">
                                                Total de vendas no mês
                                            </StyledH2>
                                            <StyledH3 className="mb-1" size={40} lineHeight={40}>
                                                {currencyConverter(highlightsData[0].value)}
                                            </StyledH3>
                                            <StyledSpan>{highlightsData[0].subtitle}</StyledSpan>
                                        </>
                                    )}
                                </CardComponent>
                            </Grid2>
                            <Grid2 sx={{ xs: 12, md: 4 }}>
                                <CardComponent
                                    className={
                                        highlightsData
                                            ? highlightsData[1].subtitle
                                            : 'skeleton-loading skeleton-loading-mh-1'
                                    }
                                    id="month-goal"
                                >
                                    {!highlightsLoading && highlightsData && (
                                        <>
                                            <StyledH2 className="mb-1" color="white">
                                                Meta do mês
                                            </StyledH2>
                                            <StyledH3
                                                className="mb-1"
                                                size={40}
                                                lineHeight={40}
                                                color="white"
                                            >
                                                {currencyConverter(highlightsData[1].value)}
                                            </StyledH3>
                                            <StyledSpan color="white">
                                                {highlightTextConverter(highlightsData[1].subtitle)}
                                            </StyledSpan>
                                        </>
                                    )}
                                </CardComponent>
                            </Grid2>
                            <Grid2 sx={{ xs: 12, md: 4 }}>
                                <CardComponent
                                    className={
                                        highlightsLoading
                                            ? 'skeleton-loading skeleton-loading-mh-1'
                                            : ''
                                    }
                                    id="total-leads"
                                >
                                    {!highlightsLoading && highlightsData && (
                                        <>
                                            <Link to="/leads">
                                                <StyledH2 className="mb-1">Leads contactados</StyledH2>
                                                <StyledH3 className="mb-1" size={40} lineHeight={40}>
                                                    {highlightsData[2].value}
                                                </StyledH3>
                                                <StyledSpan>{highlightsData[2].subtitle}</StyledSpan>
                                            </Link>
                                        </>
                                    )}
                                </CardComponent>
                            </Grid2>
                        </>
                    )}
                    <Grid2 sx={{ xs: 12, md: 7 }}>
                        {!salesPerMonthError && (
                            <CardComponent
                                className={
                                    salesPerMonthLoading
                                        ? 'skeleton-loading skeleton-loading-mh-2'
                                        : ''
                                }
                                id="month-sales-chart"
                            >
                                {!salesPerMonthLoading && salesPerMonthData && (
                                    <>
                                        <StyledH2 className="mb-1">Valor de vendas no mês</StyledH2>
                                        <CustomChart
                                            labels={salesPerMonthData.labels.map((label) => label)}
                                            data={salesPerMonthData.data.map((data) => data)}
                                            type={salesPerMonthData.type}
                                        />
                                    </>
                                )}
                            </CardComponent>
                        )}
                    </Grid2>
                    <Grid2 sx={{ xs: 12, md: 5 }}>
                        {!salesStarsError && (
                            <CardComponent
                                className={
                                    salesStarsLoading
                                        ? 'skeleton-loading skeleton-loading-mh-2'
                                        : ''
                                }
                                id="sales-stars"
                            >
                                {!salesStarsLoading && salesStarsData && (
                                    <>
                                        <StyledH2 className="mb-1">
                                            Maiores vendedores no mês
                                        </StyledH2>
                                        <AvatarList
                                            listData={salesStarsData.map((star) => ({
                                                name: star.name,
                                                subtitle: currencyConverter(star.value),
                                            }))}
                                        />
                                    </>
                                )}
                            </CardComponent>
                        )}
                    </Grid2>
                    <Grid2 sx={{ xs: 12, md: 5 }}>
                        {!newsError && (
                            <CardComponent
                                className={
                                    newsLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''
                                }
                                id="news"
                            >
                                {!newsLoading && newsData && (
                                    <>
                                        <StyledH2 className="mb-1">Notícias relevantes</StyledH2>
                                        <CustomTable
                                            headers={['Título', 'Horário']}
                                            rows={newsData.map((news) => [
                                                <a
                                                    className="ellipsis ellipsis-sm"
                                                    href={news.link}
                                                    target="_blank"
                                                >
                                                    {news.title}
                                                </a>,
                                                <a href={news.link} target="_blank">
                                                    {news.date}
                                                </a>,
                                            ])}
                                        />
                                    </>
                                )}
                            </CardComponent>
                        )}
                    </Grid2>
                    <Grid2 sx={{ xs: 12, md: 7 }}>
                        {!salesYearError && (
                            <CardComponent
                                className={
                                    salesYearLoading
                                        ? 'skeleton-loading skeleton-loading-mh-2'
                                        : ''
                                }
                                id="year-sales-chart"
                            >
                                {!salesYearLoading && salesYearData && (
                                    <>
                                        <StyledH2 className="mb-1">
                                            Valor de vendas por mês
                                        </StyledH2>
                                        <CustomChart
                                            labels={salesYearData.labels.map((label) => label)}
                                            data={salesYearData.data.map((data) => data)}
                                            type={salesYearData.type}
                                        />
                                    </>
                                )}
                            </CardComponent>
                        )}
                    </Grid2>
                </Grid2>
            </Container>
        </>
    )
}

export default Home