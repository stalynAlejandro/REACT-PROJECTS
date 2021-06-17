`Tabs` es un componente atómico que está compuesto por una serie de componentes de tipo `Tab`.

### Funcionamiento

El componente `Tabs` se encarga de gestionar cada `Tab`. Dentro de cada `Tab` se muestra la información de los componentes que deben aparecer en dicha `Tab`.
Además, cuando cambias a otra Tab los componentes que hay dentro de dicha `Tab` se destruyen.

El componente Tabs tiene los siguientes atributos:

-   detailView: boolean; Si se muestran los tabs en modal o normal.
-   tabsProps: { style: React.CSSProperties; }
-   activeTab: { id: string; }

El id de activeTab debe ser único, ya que identifica a cada Tab.

El componente `Tab` tiene los siguientes atributos:

-   id: string; El id del tab.
-   title: string; El nombre que tendrá el tab.

El id del `Tab` debe coincidir con el id de `activeTabs` para que este sea el que esté activo.

Ejemplo:

```json
return (
    <Tabs
        detailView={false}
        tabsProps={{
            style: {
                textAlign: "left",
            },
        }}
        activeTab={{
            id: "tab1",
        }}
    >
        <Tab id="tab1" title={loadMessages(locale).HOME_TAB}>
            <DashboardTab
                locale={locale}
                geojson={geojson}
                loadingTile={false}
            />
        </Tab>
        <Tab id="tab2" title={loadMessages(locale).PERFORMANCE_TAB}>
            <div style={{ gridColumn: "1 / 13", gridRow: "3 / 13" }}>
                This is tab 2
            </div>
        </Tab>
        <Tab id="tab3" title={loadMessages(locale).COVERAGE_TAB}>
            <div style={{ gridColumn: "1 / 13", gridRow: "3 / 13" }}>
                This is tab 3
            </div>
        </Tab>
        <Tab id="tab4" title={loadMessages(locale).ALARMS_TAB}>
            <div style={{ gridColumn: "1 / 13", gridRow: "3 / 13" }}>
                This is tab 4
            </div>
        </Tab>
        <Tab id="tab5" title={loadMessages(locale).CONNECTIONS_TAB}>
            <div style={{ gridColumn: "1 / 13", gridRow: "3 / 13" }}>
                This is tab 5
            </div>
        </Tab>
    </Tabs>
    );
```
