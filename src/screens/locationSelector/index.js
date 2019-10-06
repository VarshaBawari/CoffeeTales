import React, { Component } from 'react';
import { ActivityIndicator, ImageBackground, View, Text, SafeAreaView, StatusBar, Animated, Dimensions, TextInput, TouchableOpacity, Image, ScrollView, FlatList, NativeModules } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { locationSelected } from './redux/dispatcher'
import styles from './styles'
import Geocoder from 'react-native-geocoding';
import { API, API_KEY } from "../../constants"

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
            isLoading: false

        };
    }
    componentDidMount() {
        NativeModules.CountriesParsor.getCountries((countries) => {
            this.setState({ countries })

        })

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.selectedCountry) {
            this.props.navigation.navigate('Dashboard')
        }
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
            <ImageBackground source={require('../../assets/coffee_bg.jpg')} style={styles.backgroundImage}>
                <SafeAreaView style={styles.container}>
                    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
                    <ScrollView>
                        <View style={{ flex: 1, }}>
                            <Text style={{ ...styles.subTitleLabel, marginBottom: 40, marginTop: 100 }}>
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
                            {
                                !(countries.length === 1 && compCountry(countryQuery, countries[0])) &&
                                <FlatList
                                    style={{ backgroundColor: "transparent", marginHorizontal: 20, borderRadius: 10 }}
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
                            }

                            {
                                this.state.cities.length > 0 && this.state.selectedCountry != "" &&
                                <View>
                                    <Text style={{ ...styles.subTitleLabel, marginBottom: 40, marginTop: 40 }}>
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
                            {
                                this.state.selectedCountry != "" && this.state.selectedCity != "" &&
                                <View style={{ ...styles.submitBtn, backgroundColor: this.props.isLoading ? "#b88e72" : "#5e422f" }}>

                                    <TouchableOpacity
                                        disabled={this.state.isLoading}
                                        onPress={() => {
                                            this.setState({
                                                isLoading: true
                                            })
                                            Geocoder.init(API_KEY.GOOGLE_PLACES); // use a valid API key
                                            Geocoder.from(this.state.selectedCountry + "," + this.state.selectedCity)
                                                .then(json => {
                                                    var location = json.results[0].geometry.location;
                                                    this.props.locationSelected(this.state.selectedCountry, this.state.selectedCity, location.lat, location.lng)
                                                    this.setState({
                                                        isLoading: false
                                                    })
                                                })
                                                .catch(error => {
                                                    alert("Unable to fetch results for your location. " + error.message + ". Showing default results")
                                                    this.props.locationSelected("Germany", "Munich", "48.1351", "11.5820")

                                                    this.setState({
                                                        isLoading: false
                                                    })
                                                }
                                                );
                                        }} >
                                        <Text style={styles.submitBtnLabel}>Continue</Text>
                                    </TouchableOpacity>

                                </View>
                            }
                            {
                                this.state.isLoading &&
                                <ActivityIndicator color='white' size="large" />
                            }


                        </View>
                    </ScrollView>

                </SafeAreaView>
            </ImageBackground >

        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedCountry: state.locationReducer.selectedCountry,
        selctedCity: state.locationReducer.selctedCity,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ locationSelected }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressComponent)
