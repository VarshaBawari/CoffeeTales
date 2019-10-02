import React, { Component } from 'react';
import { ImageBackground, View, Text, SafeAreaView, StatusBar, Animated, Dimensions, TextInput, TouchableOpacity, Image, ScrollView, FlatList, NativeModules } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../../styles'

class AddressComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            countryQuery: '',
            selectedCountry: "",
            cities: [],
            cityQuery: '',
            selectedCity: "",

        };
    }
    componentDidMount() {
        NativeModules.CountriesParsor.getCountries((countries) => {
            this.setState({ countries })

        })

    }
    findCountry(query) {
        if (query === '') {
            return [];
        }

        const { countries } = this.state;
        const regex = new RegExp(`${query.trim()}`, 'i');
        return countries.filter(country => country.search(regex) >= 0);
    }

    findCity(query) {
        if (query === '') {
            return [];
        }

        const { cities } = this.state;
        const regex = new RegExp(`${query.trim()}`, 'i');
        return cities.filter(city => city.search(regex) >= 0);
    }

    _keyExtractor = (item, index) => { item + index.toString() };

    render() {
        const { countryQuery, cityQuery } = this.state;
        const countries = this.findCountry(countryQuery);
        const compCountry = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
        const cities = this.findCity(cityQuery);
        const compCity = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
        return (
            <View style={{ flex: 1, justifyContent: "center", }}>
                <Text style={{ ...styles.subTitleLabel, marginBottom: 40 }}>
                    Select Country
                        </Text>
                <TextInput
                    style={{ ...styles.input, marginVertical: 0, }}
                    placeholder={"Type country name"}
                    onChangeText={text => this.setState({ countryQuery: text, cities: [] })}
                    defaultValue={countryQuery}
                    autoCorrect={false}
                    autoCapitalize="none"
                />
                <FlatList
                    style={{ backgroundColor: "white", marginHorizontal: 20, borderRadius: 10 }}
                    data={countries.length === 1 && compCountry(countryQuery, countries[0]) ? [] : countries}
                    keyExtractor={(this._keyExtractor.bind(this))}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ backgroundColor: "white", height: 40, justifyContent: "center", paddingLeft: 16, borderRadius: 10 }}>
                                <TouchableOpacity style={{ backgroundColor: "white", height: 40, justifyContent: "center" }} onPress={() => {
                                    this.setState({ countryQuery: item, selectedCountry: item })
                                    NativeModules.CountriesParsor.getCitiesFor(item, (cities) => {
                                        this.setState({ cities })
                                    })
                                }}>
                                    <Text style={styles.itemText}>
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            </View>


                        )
                    }
                    }
                />
                {
                    this.state.cities.length > 0 &&
                    <View>
                        <Text style={{ ...styles.subTitleLabel, marginBottom: 40 }}>
                            Select City
                        </Text>
                        <TextInput
                            style={{ ...styles.input, marginVertical: 0, }}
                            placeholder={"Type country name"}
                            onChangeText={text => this.setState({ cityQuery: text })}
                            defaultValue={cityQuery}
                            autoCorrect={false}
                            autoCapitalize="none"
                        />
                        <FlatList
                            style={{ backgroundColor: "white", marginHorizontal: 20, borderRadius: 10 }}
                            data={cities.length === 1 && compCity(cityQuery, cities[0]) ? [] : cities}
                            keyExtractor={(this._keyExtractor.bind(this))}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ backgroundColor: "white", height: 40, justifyContent: "center", paddingLeft: 16, borderRadius: 10 }}>
                                        <TouchableOpacity style={{ backgroundColor: "white", height: 40, justifyContent: "center" }} onPress={() => this.setState({ cityQuery: item, selectedCity: item })}>
                                            <Text style={styles.itemText}>
                                                {item}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>


                                )
                            }
                            }
                        />
                    </View>
                }

            </View >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.authReducer.loadingAppData,
        authenticating: state.authReducer.authenticating,
        authErrorMessage: state.authReducer.authErrorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    // return bindActionCreators({ authenticate, clearPreviousAuthError }, dispatch)
    return bindActionCreators({}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(AddressComponent)
